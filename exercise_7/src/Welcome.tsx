interface UserCardProps {
  username: string;
  isPremuim?: boolean;
}

const Welcome = ({ username, isPremuim = false }: UserCardProps) => {
  return (
    <>
      <p>
        Hello {username}, {isPremuim ? " Welcome back Premuim " : "Welcome Guest"} user
      </p>
    </>
  );
};

export default Welcome;
