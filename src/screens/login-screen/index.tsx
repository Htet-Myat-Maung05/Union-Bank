import { Alert, Pressable, Text, View } from 'react-native'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { getLoginSchema, TLoginSchema } from '@/validations/zod-validation-scheme/loginScheme.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import LoginLayout from '@/components/layouts/login-layout'
import RNTextInput from '@/components/text-input'
import RNText from "@/components/custom-text";
import getStyles from './LoginScreen.styles'
import Ionicons from "react-native-vector-icons/Ionicons";
import useCustomTheme from '@/hooks/useCustomTheme.hook'
import OrDivider from '@/components/or-divider'
import { SocialLoginButton } from '@/components/social-login-button'
import { StackActions, useNavigation } from '@react-navigation/native'
import { REGISTER_SCREEN } from '@/constants/Route.constants'
import FirebaseAuth from '@/services/FirebaseAuth.service'

const LoginScreen: React.FC = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);
    const navigation = useNavigation();

    const { ...methods } = useForm<TLoginSchema>({
        resolver: zodResolver(getLoginSchema()),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = async (data: TLoginSchema) => {
        try {
            await FirebaseAuth.signIn(data.email, data.password);

            Alert.alert('အောင်မြင်ပါသည်', 'အကောင့်ဝင်ရောက်မှု အောင်မြင်ပါသည်');
        } catch (error) {
            Alert.alert('Login failed', 'Failed to login to your account.');
            console.error('Login failed:', error);
        }
    };

    const onError = (errors: any) => {
        console.log('Validation errors:', errors);
    };

    return (
        <LoginLayout>
            <FormProvider {...methods}>
                <View style={styles.mainContainer}>
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
                        <Text style={styles.SignInText}>Sign In</Text>
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

                    <Text style={styles.BottmText}>Don't have an account ?
                        <Pressable onPress={() => navigation.dispatch(StackActions.replace(REGISTER_SCREEN))}>
                            <Text style={styles.SignUpText}>Sign Up</Text>
                        </Pressable>
                    </Text>

                </View>
            </FormProvider>
        </LoginLayout >
    )
}

export default LoginScreen