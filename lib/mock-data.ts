// Mock data for Madrasah Diniyah
export const madrasahTeachers = [
  { id: "1", name: "Ustadz Ahmad Fauzi", phone: "081234567890", classes: ["Kelas 3A", "Kelas 4B"] },
  { id: "2", name: "Ustadzah Siti Aminah", phone: "081234567891", classes: ["Kelas 2A"] },
  { id: "3", name: "Ustadz Muhammad Ridwan", phone: "081234567892", classes: ["Kelas 5A", "Kelas 6A"] },
  { id: "4", name: "Ustadzah Fatimah Zahra", phone: "081234567893", classes: ["Kelas 1A"] },
  { id: "5", name: "Ustadz Hasan Basri", phone: "081234567894", classes: ["Kelas 4A"] },
]

export const madrasahClasses = [
  { id: "1", name: "Kelas 1A", teacherId: "4", studentCount: 18 },
  { id: "2", name: "Kelas 2A", teacherId: "2", studentCount: 20 },
  { id: "3", name: "Kelas 3A", teacherId: "1", studentCount: 15 },
  { id: "4", name: "Kelas 4A", teacherId: "5", studentCount: 17 },
  { id: "5", name: "Kelas 4B", teacherId: "1", studentCount: 16 },
  { id: "6", name: "Kelas 5A", teacherId: "3", studentCount: 19 },
  { id: "7", name: "Kelas 6A", teacherId: "3", studentCount: 15 },
]

export const madrasahStudents = [
  { id: "1", name: "Ahmad Zaki", nis: "001001", classId: "1" },
  { id: "2", name: "Fatimah Azzahra", nis: "001002", classId: "1" },
  { id: "3", name: "Muhammad Rifqi", nis: "001003", classId: "1" },
  { id: "4", name: "Aisyah Nur", nis: "001004", classId: "1" },
  { id: "5", name: "Ibrahim Khalil", nis: "002001", classId: "2" },
  { id: "6", name: "Khadijah Maryam", nis: "002002", classId: "2" },
  { id: "7", name: "Umar Faruq", nis: "002003", classId: "2" },
  { id: "8", name: "Zainab Husna", nis: "002004", classId: "2" },
  { id: "9", name: "Ali Hasan", nis: "003001", classId: "3" },
  { id: "10", name: "Mariam Salsabila", nis: "003002", classId: "3" },
  { id: "11", name: "Yusuf Ibrahim", nis: "003003", classId: "3" },
  { id: "12", name: "Ruqayyah Amani", nis: "003004", classId: "3" },
  { id: "13", name: "Hamzah Malik", nis: "004001", classId: "4" },
  { id: "14", name: "Safiyah Naura", nis: "004002", classId: "4" },
  { id: "15", name: "Bilal Mustafa", nis: "004003", classId: "4" },
  { id: "16", name: "Hafsa Aliyah", nis: "004004", classId: "4" },
  { id: "17", name: "Usman Hakim", nis: "005001", classId: "5" },
  { id: "18", name: "Aisha Zahra", nis: "005002", classId: "5" },
  { id: "19", name: "Sulaiman Aziz", nis: "005003", classId: "5" },
  { id: "20", name: "Ramlah Khansa", nis: "005004", classId: "5" },
]

// Mock data for Ngaji Al Qur'an
export const ngajiTeachers = [
  { id: "1", name: "Ustadz Abdullah Hakim", phone: "081234567895", groupCount: 2 },
  { id: "2", name: "Ustadzah Aminah Wardah", phone: "081234567896", groupCount: 2 },
  { id: "3", name: "Ustadz Khalid Umar", phone: "081234567897", groupCount: 2 },
  { id: "4", name: "Ustadzah Maimunah Salma", phone: "081234567898", groupCount: 1 },
]

export const kelompokNgaji = [
  { id: "1", name: "Kelompok A1", teacherId: "1", santriCount: 12, session: "pagi" },
  { id: "2", name: "Kelompok A2", teacherId: "1", santriCount: 13, session: "malam" },
  { id: "3", name: "Kelompok B1", teacherId: "2", santriCount: 14, session: "pagi" },
  { id: "4", name: "Kelompok B2", teacherId: "2", santriCount: 12, session: "malam" },
  { id: "5", name: "Kelompok C1", teacherId: "3", santriCount: 15, session: "pagi" },
  { id: "6", name: "Kelompok C2", teacherId: "3", santriCount: 13, session: "malam" },
  { id: "7", name: "Kelompok D1", teacherId: "4", santriCount: 11, session: "pagi" },
]

export const santriNgaji = [
  { id: "1", name: "Akbar Maulana", kelompokId: "1" },
  { id: "2", name: "Nabila Putri", kelompokId: "1" },
  { id: "3", name: "Farhan Syahputra", kelompokId: "1" },
  { id: "4", name: "Rania Azzahra", kelompokId: "1" },
  { id: "5", name: "Rizki Aditya", kelompokId: "2" },
  { id: "6", name: "Salwa Kamila", kelompokId: "2" },
  { id: "7", name: "Faisal Rahman", kelompokId: "2" },
  { id: "8", name: "Inaya Syifa", kelompokId: "2" },
  { id: "9", name: "Zidan Hafiz", kelompokId: "3" },
  { id: "10", name: "Nayla Hanifa", kelompokId: "3" },
  { id: "11", name: "Alif Ramadhan", kelompokId: "3" },
  { id: "12", name: "Zahra Amelia", kelompokId: "3" },
  { id: "13", name: "Haikal Fakhri", kelompokId: "4" },
  { id: "14", name: "Syifa Nadira", kelompokId: "4" },
  { id: "15", name: "Azka Rabbani", kelompokId: "4" },
  { id: "16", name: "Kalila Zahwa", kelompokId: "4" },
  { id: "17", name: "Arkan Faris", kelompokId: "5" },
  { id: "18", name: "Latifa Azzura", kelompokId: "5" },
  { id: "19", name: "Ghifari Ramzi", kelompokId: "5" },
  { id: "20", name: "Naira Syahira", kelompokId: "5" },
]
