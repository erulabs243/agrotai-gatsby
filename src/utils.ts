import { EncryptStorage } from "encrypt-storage";
import { DateTime, DateTimeFormatOptions } from "luxon";

export const encryptedStorage = new EncryptStorage('yXj9h8RtKSXvF7ZKbIP2BwiP', {
    prefix: 'agrotai'
})

export const formatDate = (date: string) => {
    const dt = DateTime.fromISO(date)
    const format: DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }

    return dt.setLocale('fr').toLocaleString(format)
}