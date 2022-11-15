import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Heart Doctor`;

    }, [title])
}

export default useTitle;