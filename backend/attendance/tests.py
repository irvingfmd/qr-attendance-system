from django.test import TestCase
from attendance.models import Attendance
from datetime import date

class AttendanceTestCase(TestCase):
    def test_attendance_creation(self):
        # Crear una instancia de Attendance
        attendance = Attendance.objects.create(
            student_name='John Doe',
            date='2025-06-14',
            is_present=True
        )

        # Verificar que los valores fueron guardados correctamente
        self.assertEqual(attendance.student_name, 'John Doe')
        self.assertEqual(attendance.date, date(2025, 6, 14))
        self.assertTrue(attendance.is_present)

    def test_attendance_absence(self):
        # Crear una instancia con ausencia
        attendance = Attendance.objects.create(
            student_name='Jane Doe',
            date='2025-06-14',
            is_present=False
        )

        # Verificar que los valores fueron guardados correctamente
        self.assertEqual(attendance.student_name, 'Jane Doe')
        self.assertEqual(attendance.date, date(2025, 6, 14))
        self.assertFalse(attendance.is_present)