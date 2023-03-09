interface AboutContainerProps {
    children: React.ReactNode,
    distance: string,
}

const AboutContainer = ({children, distance}: AboutContainerProps) => {
  return (
    <>        
    <div className="circle">{distance}</div>
    <div className="timeline--element">
      <div className="timeline--line--container">
        <div className="timeline--line"></div>
      </div>
      {children}
      </div>
    </>
  )
}

export default AboutContainer