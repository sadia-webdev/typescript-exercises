# TypeScript exercise

TypeScript exercise in the mentorship program.

---

## 🧩 Code Snippet

```jsx
import useLocalStorage from "./hooks/useLocalStorage";
import useNumberStorage from "./hooks/useNumberStorage";
// import useSettingsStorage from "./hooks/useSettingsStorage";

const App = () => {
  const [score, setScore] = useNumberStorage("score", 0);

  const [setting, setSetting] = useLocalStorage<{
    language: string;
    notifications: boolean;
  }>("setting", {
    language: "En",
    notifications: false,
  });

  return (
    <div>
      {score}
      <button onClick={() => setScore(score + 1)}>Add</button>

      <button
        onClick={() => setSetting({ language: "Arabic", notifications: true })}
      >
        setSetting
      </button>
      <p>language: {setting.language}</p>
      <p>notification: {setting.notifications ? "true" : "false"}</p>
    </div>
  );
};

export default App;


```

![exercis photo](/exercise_10/src/assets/image.png)
