import { useEffect, useState } from "react";

interface Setting {
  language: string;
  notifications: boolean;
}

function useSettingsStorage(
  key: string,
  initialValue: Setting,
): [Setting, (val: Setting) => void] {
  const [value, setValue] = useState<Setting>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSettingsStorage;
