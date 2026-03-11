import { getApp } from "@react-native-firebase/app";
import { createUserWithEmailAndPassword, FirebaseAuthTypes, getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth";

const FirebaseAuth = {
    auth: getAuth(getApp()),

    //sign up
    async signUp(fullname: string, email: string, password: string): Promise<FirebaseAuthTypes.User> {
        const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
        return userCredential.user;
    },

    //sign in
    async signIn(email: string, password: string): Promise<FirebaseAuthTypes.User> {
        const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
        return userCredential.user;
    },

    // sign out
    async signOut(): Promise<void> {
        await this.auth.signOut();
    },

    // reset password
    async resetPassword(email: string): Promise<void> {
        await this.auth.sendPasswordResetEmail(email)
    },

    // get user
    getCurrentUser(): FirebaseAuthTypes.User | null {
        return this.auth.currentUser
    }
}

export default FirebaseAuth;