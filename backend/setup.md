# 🚀 Project Setup Guide – Flood Rescue Coordination

This guide explains how to configure and run the **Flood-Rescue-Coordination backend** using IntelliJ IDEA.

---

# 1. Open the Project
Open the project folder **Flood-Rescue-Coordination** using **IntelliJ IDEA**.

File → Open → Select Flood-Rescue-Coordination folder

---

# 2. Open the Run Configuration Menu
1. Click the **Menu icon (☰)** located in the **top-left corner** of IntelliJ IDEA.
2. Select **Run**.
3. Select Edit Configurations...

---

# 3. Access Run Configurations
From the **Run menu**, select:

This will open the configuration window.

---

# 4. Create a New Application Configuration
1. Click the **➕ (Add New Configuration)** button in the top-left corner.
2. Choose the configuration type:

---

# 5. Configure Application Settings

Fill in the following fields:

### Build and Run

| Field | Value |
|-----|-----|
| **SDK** | `21` |
| **Module (-cp)** | `backend` |
| **Main class** | `com.rescue.backend.FloodRescueCoordinationApplication` |

To find the **Main class**, click the **class selector icon** and navigate to:

---

# 6. Enable Additional Options

Click the blue link:

Modify options

---

Enable the following:

- ✅ **Working directory**
- ✅ **Environment variables**

---

# 7. Configure Environment Settings

### Working Directory

Set the working directory to the **backend folder** (where the `pom.xml` file is located).

Example:

D:\FPT_University\prj301\Flood-Rescue-Coordination

### Environment Variables

1. Click the **file icon** at the end of the field.
2. Select the `.env` file located inside the **backend folder**.

Example path:

D:/FPT_University/prj301/Flood-Rescue-Coordination/.env

---

# 8. Apply and Run the Application

1. Click **Apply** to save the configuration.
2. Click **Run ▶** (green triangle icon) to start the backend server.

---
