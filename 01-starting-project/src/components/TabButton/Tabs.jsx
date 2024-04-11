export default function Tabs({ children, buttons, container }) {
    const ButtonsContainer = container;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
