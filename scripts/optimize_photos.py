from PIL import Image
from pathlib import Path
for name in ['cristina-inicio-6563','cristina-retrato-sobre-mi']:
    im=Image.open(Path('public')/(name+'.jpg'))
    im.thumbnail((1800,2200),Image.Resampling.LANCZOS)
    im.save(Path('public')/(name+'.webp'),quality=85,method=6)
