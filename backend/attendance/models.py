from django.db import models

class Attendance(models.Model):
    student_name = models.CharField(max_length=100)
    date = models.DateField()
    is_present = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.student_name} - {self.date}"