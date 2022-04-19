import { useState, useEffect, useRef } from 'react'

const useDropdown = () => {
    const node = useRef()
    const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState('')

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            setIsActive('searchbar__search--active')
            return;
        }
        
        setOpen(false)
        setIsActive('')     
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);               
        }
    }, [])

    return {
        node,
        open,
        setOpen,
        isActive
    };
}

export default useDropdown