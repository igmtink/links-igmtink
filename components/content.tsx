const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <article className="max-w-sm mx-auto w-full animate-onload">
      {children}
    </article>
  )
}

export default Content
