import requests
import os
import glob

# --------------------------
# CONFIG
# --------------------------
API_BASE = "http://127.0.0.1:8000"
FOLDER_PATH = r"images\malignant"   # <-- your test folder

# Collect all jpg/jpeg/png images
image_paths = glob.glob(os.path.join(FOLDER_PATH, "*.jpg")) + \
              glob.glob(os.path.join(FOLDER_PATH, "*.jpeg")) + \
              glob.glob(os.path.join(FOLDER_PATH, "*.png"))

if not image_paths:
    raise FileNotFoundError(f"No images found in {FOLDER_PATH}")

# --------------------------
# SINGLE IMAGE
# --------------------------
if len(image_paths) == 1:
    url = f"{API_BASE}/predict"
    img_path = image_paths[0]
    with open(img_path, "rb") as f:
        files = {"file": (os.path.basename(img_path), f, "image/jpeg")}
        r = requests.post(url, files=files)

    print("Endpoint: /predict")
    print("Status:", r.status_code)
    print("Response:", r.json())

# --------------------------
# MULTIPLE IMAGES
# --------------------------
else:
    url = f"{API_BASE}/predict-batch?aggregate=mean"
    files = [("files", (os.path.basename(p), open(p, "rb"), "image/jpeg")) for p in image_paths]
    r = requests.post(url, files=files)

    # Close all opened file handles
    for _, f in files:
        f[1].close()

    print("Endpoint: /predict-batch")
    print("Status:", r.status_code)
    print("Response:", r.json())
