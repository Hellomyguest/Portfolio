export type HomePageProps = {
  children?: React.ReactNode;
};

export const HomePage = ({ children }: HomePageProps) => (
  <div>
    <p>Hi world</p>
    {children}
  </div>
);

HomePage.defaultProps = {
  children: null,
};
