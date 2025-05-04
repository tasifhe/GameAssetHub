from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Asset(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='assets/')
    type = models.CharField(
        max_length=50,
        choices=[
            ('3d', '3D Models'),
            ('2d', '2D Art'),
            ('audio', 'Audio'),
            ('scripts', 'Scripts'),
        ],
        default='3d'
    )

    def __str__(self):
        return self.title
