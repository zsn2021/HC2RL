<div align="center">

# HC2RL: HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections

</div>

---

## Overview

This repository page provides supplementary CARLA video demonstrations for the proposed **HC2RL** navigation policy in unsignalized-intersection scenarios. The videos show representative task executions under **Scenario 1 (Random Navigation)** and illustrate the policy behavior across different maneuver types and target lanes.

---

## Scenario Setup

### Scenario 1: Random Navigation

In this scenario, the ego vehicle starts from a randomly selected entry lane, and the navigation task is dynamically sampled according to the lane configuration:

- **Lane 1**: `{L1, L2, S1}`
- **Lane 2**: `{S2, R1, R2}`

where **L**, **S**, and **R** denote **left-turn**, **straight-going**, and **right-turn** maneuvers, respectively, while `1` and `2` indicate the **target lane IDs**.

---

## Task Definitions

To facilitate video browsing, the six navigation tasks are summarized as follows:

| Task | Description |
|------|-------------|
| **L1** | Left turn to target lane 1 |
| **L2** | Left turn to target lane 2 |
| **S1** | Go straight to target lane 1 |
| **S2** | Go straight to target lane 2 |
| **R1** | Right turn to target lane 1 |
| **R2** | Right turn to target lane 2 |

---

## Supplementary Video Results

The following videos provide representative CARLA demonstrations of the HC2RL policy for each navigation task.

### L1 Task  
**Left turn to target lane 1**

<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br><br>
      <video src="https://github.com/user-attachments/assets/35d1ffb8-5d6c-405a-a5e5-40e77f76159a" width="100%" controls title=""></video>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br><br>
      <video src="https://github.com/user-attachments/assets/29e2488f-03e6-467f-8e09-2aac5b00ab12" width="100%" controls title=""></video>
    </td>
  </tr>
</table>

### L2 Task  
**Left turn to target lane 2**

<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br><br>
      <video src="https://github.com/user-attachments/assets/c13250fe-a77b-43db-a125-9afb118209f4" width="100%" controls title=""></video>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br><br>
      <video src="https://github.com/user-attachments/assets/f69b8c18-63e8-4357-952b-4a225199aa27" width="100%" controls title=""></video>
    </td>
  </tr>
</table>

### R1 Task  
**Right turn to target lane 1**

<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br><br>
      <video src="https://github.com/user-attachments/assets/b72711e2-1a39-4cf9-a34b-8f57ce94e205" width="100%" controls title=""></video>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br><br>
      <video src="https://github.com/user-attachments/assets/8f78fb64-1881-4b70-bb9f-6ed701fc3547" width="100%" controls title=""></video>
    </td>
  </tr>
</table>

### R2 Task  
**Right turn to target lane 2**

<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br><br>
      <video src="https://github.com/user-attachments/assets/063e9a32-7fad-4bc8-939d-be8701b9a6e3" width="100%" controls title=""></video>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br><br>
      <video src="https://github.com/user-attachments/assets/a4b3dbe6-cd4a-404e-a66b-6790a2c27c36" width="100%" controls title=""></video>
    </td>
  </tr>
</table>

### S1 Task  
**Go straight to target lane 1**

<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br><br>
      <video src="https://github.com/user-attachments/assets/a44b787c-39d5-458b-aeef-43075ee79aca" width="100%" controls title=""></video>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br><br>
      <video src="https://github.com/user-attachments/assets/a3de60c8-c679-4b2f-96a6-b51b8e86659c" width="100%" controls title=""></video>
    </td>
  </tr>
</table>

### S2 Task  
**Go straight to target lane 2**

<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br><br>
      <video src="https://github.com/user-attachments/assets/cc6c4513-00d3-4277-b460-d94b94571474" width="100%" controls title=""></video>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br><br>
      <video src="https://github.com/user-attachments/assets/588c40a7-8a4c-41ac-9b19-5d6f18b68779" width="100%" controls title=""></video>
    </td>
  </tr>
</table>

---

## Notes

- All videos are collected in **Scenario 1 (Random Navigation)**.
- Each task is illustrated with **two representative cases**.
- The demonstrations are intended to qualitatively show the behavior of the proposed **HC2RL** policy under different navigation commands and traffic interactions.
