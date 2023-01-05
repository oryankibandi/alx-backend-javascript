interface MajorCredits {
  credits: number,
  brand: Symbol
}

interface MinorCredits {
  credits: number,
  brand: Symbol
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits) => {
  return subject1.credits + subject2.credits;
}

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits) => {
  return subject1.credits + subject2.credits;
} 