export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Start1: undefined;
    Start2: undefined;
    Start3: undefined;
    Start4: undefined;
    Start: undefined;
    Profile: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
