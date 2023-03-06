export const handleHover = (str:string) => {
    const div = document.getElementById(str)
    div && div?.setAttribute("style", "color: white")
  }
  
export const handleHoverEnd = (str:string) => {
    const div = document.getElementById(str)
    div && div?.setAttribute("style", "color: #bbbabc")
  }