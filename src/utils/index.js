import { useIntl } from "react-intl"
export const I = (id) => {
    const intl = useIntl()
    return intl.formatMessage({ id: id })
}