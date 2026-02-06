const PageContainer = ({ children }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default PageContainer;
