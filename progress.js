
const KEY = "inglesNaBarcaStudentProgressV2";

export function getProgress() {
  try {
    return {
      xp: 0,
      streak: 0,
      completedLessons: 0,
      completedUnits: 0,
      hearts: 5,
      lastLesson: "Nenhuma ainda",
      ...JSON.parse(localStorage.getItem(KEY) || "{}")
    };
  } catch {
    return {
      xp: 0,
      streak: 0,
      completedLessons: 0,
      completedUnits: 0,
      hearts: 5,
      lastLesson: "Nenhuma ainda"
    };
  }
}

export function saveProgress(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function seedDemoProgress() {
  const current = getProgress();
  if (current.__seeded) return current;
  const seeded = {
    ...current,
    xp: 320,
    streak: 6,
    completedLessons: 18,
    completedUnits: 3,
    hearts: 4,
    lastLesson: "Unidade 4 · Lição 1",
    __seeded: true
  };
  saveProgress(seeded);
  return seeded;
}

export function resetProgress() {
  localStorage.removeItem(KEY);
}
