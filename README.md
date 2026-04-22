<div align="center">

# HC2RL: HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections

<br>

<span style="background:#e6f7ff;color:#1890ff;padding:4px 10px;border-radius:6px;margin:0 5px;">🚗 Unsignalized Intersection</span>
<span style="background:#f0f2f5;color:#333;padding:4px 10px;border-radius:6px;margin:0 5px;">🔒 Constrained RL</span>
<span style="background:#f6ffed;color:#52c41a;padding:4px 10px;border-radius:6px;margin:0 5px;">🛡️ HOCBF Safety Guarantee</span>
<span style="background:#fff7e6;color:#faad14;padding:4px 10px;border-radius:6px;margin:0 5px;">🤖 Autonomous Navigation</span>

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




<table>
  <tr>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/1c41bbcd-3c3e-406b-a994-bb5d5c284b61" width="100%" controls></td>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/69e0ea0e-5f25-4372-8fa5-1a0dedbabaca" width="100%" controls></td>
  </tr>
</table>

### L2 Task






<table>
  <tr>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/3586d7ce-151d-43ae-9658-dc8d5edc57ea" width="100%" controls></td>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/ce62480d-a2a1-4baf-a082-d754604a7e07" width="100%" controls></td>
  </tr>
</table>

### R1 Task




<table>
  <tr>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/89addb2d-0963-4d57-9d6f-a1d1898ad0ee" width="100%" controls></td>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/e12dac46-b6c9-4e3b-bb60-f95bb154f012" width="100%" controls></td>
  </tr>
</table>

### R2 Task




<table>
  <tr>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/d4d41586-f228-40f7-ad41-e78a818f3945" width="100%" controls></td>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/46b60a27-007c-4c7b-94ad-f73f560ff90e" width="100%" controls></td>
  </tr>
</table>

### S1 Task




<table>
  <tr>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/a9ab5817-c9c3-4254-b271-53dde77a9e97" width="100%" controls></td>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/80d484a3-b819-42cc-84a5-202e2fa3720f" width="100%" controls></td>
  </tr>
</table>

### S2 Task

<table>
  <tr>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/44584bf3-4cd6-463d-bbda-31e22df6b9b1" width="100%" controls></td>
    <td align="center" width="50%"><video src="https://github.com/user-attachments/assets/6737d752-f816-4ad3-9eee-5459103fecb8" width="100%" controls></td>
  </tr>
</table>

---

## Notes

- All videos are collected in **Scenario 1 (Random Navigation)**.
- Each task is illustrated with **two representative cases**.
- The demonstrations are intended to qualitatively show the behavior of the proposed **HC2RL** policy under different navigation commands and traffic interactions.
