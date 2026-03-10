import useCustomTheme from "@/hooks/useCustomTheme.hook";
import { JSX, useState } from "react";
import { useController, UseControllerProps, useFormContext } from "react-hook-form";
import { Pressable, TextInput, TextInputProps as RNTextInputProps, View } from "react-native";
import getStyles from "./TextInput.styles";
import RNText from "../custom-text";
import COLORS from "@/styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import FormFieldErrorMessage from "../form-field-error-message";
import { RefObject } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

interface TextInputProps extends RNTextInputProps, UseControllerProps {
    label?: string;
    defaultValue?: string;
    containerStyle?: StyleProp<ViewStyle>;
    errorTextStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
    isTextArea?: boolean;
    isPasscodeField?: boolean;
    rightComponent?: JSX.Element;
    hasPrefix?: boolean;
    isRequired?: boolean;
    showError?: boolean;
    inpRef?: RefObject<TextInput>;
    hideStar?: boolean;
    horizontal?: boolean;
    prefixValue?: string;
    passcodeOnChange?: (value: string) => void;
    leftIcon?: React.ReactNode;
}

export default function RNTextInput(props: TextInputProps) {
    const formContext = useFormContext();
    const { name } = props;

    if (!formContext || !name) {
        throw new Error(
            !formContext ? 'TextInput must be wrapped by the FormProvider'
                : 'Name must be defined',
        )
    }

    return <ControlledInput {...props} />
}

const ControlledInput = (props: TextInputProps): JSX.Element => {
    const {
        label,
        name,
        rules,
        isTextArea,
        isPasscodeField,
        defaultValue,
        containerStyle,
        errorTextStyle,
        inputStyle,
        rightComponent,
        isRequired = false,
        hasPrefix = false,
        inpRef,
        showError = true,
        hideStar = false,
        horizontal = false,
        prefixValue = '+95',
        leftIcon,
        ...inputProps
    } = props

    const { field } = useController({ name, rules, defaultValue });
    const theme = useCustomTheme()
    const styles = getStyles(theme);

    const formContext = useFormContext();
    const { formState } = formContext;
    const hasError = Boolean(formState?.errors[name])

    const [isSecure, setIsSecure] = useState(isPasscodeField ?? false);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const hasValue = Boolean(field.value && field.value.toString().length > 0)

    const getBorderColor = () => {
        if (hasError) return theme.colors.error;
        if (isFocus) return theme.colors.textInputFocusBorderColor1;
        if (hasValue) return theme.colors.textInputFocusBorderColor2;
        return theme.colors.border;
    }

    const handleTextChange = (newText: string) => {
        const isPasteAction = newText.length > text.length + 1;

        if (isPasteAction) {
            field.value = text;
            return;
        }

        setText(newText);
        return newText;
    }

    return (
        <View style={containerStyle}>
            <View style={{ flexDirection: horizontal ? 'row' : undefined }}>

                {/* label row */}
                <View style={[styles.mainContainer, horizontal && { flex: 1 }]}>
                    {label && (
                        <RNText style={{
                            ...styles.label,
                            color: hasError ? COLORS.error : theme.colors.black
                        }}>
                            {label}
                        </RNText>
                    )}
                    {isRequired && !hideStar && (
                        <RNText style={styles.star}>{'*'}</RNText>
                    )}
                </View>

                <View style={[{
                    height: isTextArea ? 90 : 45,
                    borderColor: getBorderColor(),
                    backgroundColor: inputProps.editable === false
                        ? theme.colors.disableColor
                        : theme.colors.background,
                    flex: horizontal ? 2 : undefined
                }, styles.input, (isFocus || hasError) && styles.inputSub]}>

                    {hasPrefix && (
                        <View style={styles.prefixContainer}>
                            <RNText style={styles.prefix}>{prefixValue}</RNText>
                        </View>
                    )}

                    {leftIcon && (
                        <View style={styles.leftIconContainer}>
                            {leftIcon}
                        </View>
                    )}


                    <TextInput
                        contextMenuHidden={isPasscodeField ? true : false}
                        allowFontScaling={false}

                        style={[styles.inputStyle, inputStyle && inputStyle]}

                        onChangeText={value => {
                            const validNewText = handleTextChange(value);

                            if (validNewText === undefined) {
                                field.onChange(text);
                                return;
                            }

                            field.onChange(validNewText);

                            if (isPasscodeField && props.passcodeOnChange) {
                                props.passcodeOnChange(validNewText);
                            }
                        }}

                        onFocus={() => setIsFocus(true)}

                        onBlur={() => {
                            field.onBlur();
                            setIsFocus(false);
                        }}

                        value={field.value}
                        placeholderTextColor={theme.colors.placeHolderTextColor}
                        secureTextEntry={isSecure}
                        editable={!inputProps.disabled}
                        ref={inpRef ? inpRef : null}
                        {...inputProps}
                    />

                    {isPasscodeField && (
                        <Pressable onPress={() => setIsSecure(!isSecure)} style={styles.eyeIcon}>
                            {isSecure
                                ? <Ionicons name='eye-off-outline' color={theme.colors.icon} size={16} />
                                : <Ionicons name='eye-outline' color={theme.colors.icon} size={16} />
                            }
                        </Pressable>
                    )}

                    {rightComponent}
                </View>
            </View>

            {hasError && showError ? (
                <FormFieldErrorMessage
                    textStyle={errorTextStyle}
                    errorMessage={formState?.errors[name]?.message?.toString()}
                />
            ) : null}

        </View>
    )
}