import os
from PIL import Image

IMAGES_DIR = r"c:\Users\USMAN\Documents\GitHub\untitled\public\images"

# Pillow's rotate() uses positive angles for counter-clockwise.
# Block 02: currently ~13.3° CCW, target is 7° CCW. Need to rotate -6.3° (clockwise).
# Block 04: currently ~3.9° CCW, target is 7° CCW. Need to rotate +3.1° (counter-clockwise).

rotations = {
    "service-web-development-maintenance.png": -6.3,
    "service-social-media.png": 3.1
}

for filename, angle in rotations.items():
    filepath = os.path.join(IMAGES_DIR, filename)
    if os.path.exists(filepath):
        print(f"Rotating {filename} by {angle} degrees (Pillow rotation)...")
        img = Image.open(filepath).convert("RGBA")
        
        # Use bicubic interpolation for quality and expand=True to prevent clipping the glow/corners
        rotated = img.rotate(angle, resample=Image.BICUBIC, expand=True)
        
        rotated.save(filepath, "PNG", optimize=True)
        print(f"Successfully updated {filename}")
    else:
        print(f"File not found: {filename}")
