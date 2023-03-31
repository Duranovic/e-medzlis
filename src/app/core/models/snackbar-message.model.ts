import { SnackbarStatus } from '../types/snackbar-status';

export interface SnackbarMessage {
    status: SnackbarStatus,
    title: string,
    description: string
}