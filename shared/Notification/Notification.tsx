import { useToast } from 'expo-toast';
import { Colors } from '../colors';

export const useNotification = () => {
    const toast = useToast();

    const showNotification = (
        message: string,
        type: 'success' | 'error' | 'info' = 'success'
    ) => {
        const backgroundColors = {
            success: Colors.green,
            error: Colors.red,
            info: Colors.back,
        };

        toast.show(message, {
            duration: 4000,
            position: 1,
        });
    };

    return showNotification;
};
