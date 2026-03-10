import { CommonActions, NavigationContainerRef, ParamListBase, StackActions } from "@react-navigation/native";
import React from "react";

export const navigationRef = React.createRef<NavigationContainerRef<ParamListBase>>();

export function navigate(name: string, params?: object) {
    navigationRef.current?.navigate(name, params)
}

export function replace(name: string, params?: object) {
    navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function push(name: string, params?: object) {
    navigationRef.current?.dispatch(StackActions.push(name, params))
}

export function back() {
    navigationRef.current?.goBack()
}

export function pop(count: number = 1) {
    navigationRef.current?.dispatch(StackActions.pop(count))
}

export function reset(name: string, params?: object) {
    navigationRef.current?.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name, params }] })
    )
}