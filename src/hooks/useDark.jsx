const useDark = (isDark) => {
    if(isDark !== null) {
        localStorage.setItem('dark-mode', isDark)
    }
    const isDarkMode = localStorage.getItem('dark-mode')
    
    if(isDarkMode === "true") {
        document.querySelector("html").classList.add("dark")
    } else {       
        document.querySelector("html").classList.remove("dark")

    }
}

export default useDark