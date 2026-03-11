import LoginLayout from "@/components/layouts/login-layout";
import useCustomTheme from "@/hooks/useCustomTheme.hook"
import { getRegisterSchema, TRegisterSchema } from "@/validations/zod-validation-scheme/registerScheme.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Alert, Pressable, Text, View } from "react-native";
import getStyles from "./SignUpScreen.styles";
import RNTextInput from "@/components/text-input";
import Ionicons from "react-native-vector-icons/Ionicons"
import { StackActions, useNavigation } from "@react-navigation/native";
import { LOGIN_SCREEN } from "@/constants/Route.constants";
import { SocialLoginButton } from "@/components/social-login-button";
import OrDivider from "@/components/or-divider";
import RNText from "@/components/custom-text"
import FirebaseAuth from "@/services/FirebaseAuth.service";

const RegisterScreen: React.FC = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);
    const navigation = useNavigation();

    const { ...methods } = useForm<TRegisterSchema>({
        resolver: zodResolver(getRegisterSchema()),
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data: TRegisterSchema) => {
        try {
            await FirebaseAuth.signUp(data.username, data.email, data.password);
        } catch (error) {
            Alert.alert('Login failed:', 'Failed to create account .');
            console.error('Login failed:', error);
        }
    }

    const onError = (errors: any) => {
        console.log('Validation errors:', errors);
    }

    return (
        <LoginLayout>
            <FormProvider {...methods}>
                <View style={styles.mainContainer}>
                    <RNTextInput
                        name="username"
                        placeholder="Enter username"
                        onChangeText={(value) => methods.setValue('username', value, { shouldValidate: true })}
                        leftIcon={<Ionicons name='person' size={18} color={theme.colors.icon} />} />
                    <RNTextInput
                        name='email'
                        placeholder='Enter your email address'
                        keyboardType='email-address'
                        onChangeText={(value) => methods.setValue('email', value, { shouldValidate: true })}
                        leftIcon={<Ionicons name='mail' size={18} color={theme.colors.icon} />} />

                    <RNTextInput
                        name='password'
                        placeholder='Enter your password'
                        keyboardType='number-pad'
                        isPasscodeField
                        leftIcon={<Ionicons name='lock-closed' size={18} color={theme.colors.icon} />} />

                    <RNText style={{ ...styles.label }}>
                        forgot password ?
                    </RNText>

                    <Pressable
                        style={styles.SignInBtn}
                        onPress={methods.handleSubmit(onSubmit, onError)}>
                        <Text style={styles.SignInText}>Sign Up</Text>
                    </Pressable>

                    <OrDivider />

                    <View style={styles.socialBtnContainer}>
                        <SocialLoginButton
                            icon="logo-google"
                            label="Continue with Google"
                            iconColor="#EA4335"
                            onPress={() => console.log('Google login')}
                        />
                        <SocialLoginButton
                            icon="logo-apple"
                            label="Continue with Apple"
                            iconColor="#000"
                            onPress={() => console.log('Apple login')}
                        />
                    </View>

                    <Text style={styles.BottmText}>Already have an account ?
                        <Pressable onPress={() => navigation.dispatch(StackActions.replace(LOGIN_SCREEN))}>
                            <Text style={styles.SignUpText}>Sign In</Text>
                        </Pressable>
                    </Text>
                </View>
            </FormProvider>
        </LoginLayout>
    )
}

export default RegisterScreen;