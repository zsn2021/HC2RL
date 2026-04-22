<!-- File: README.md -->

<div align="center">

# HC2RL: HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections

<p align="center">
  <strong>Safety-aware autonomous navigation at unsignalized intersections</strong><br/>
  A constrained reinforcement learning framework guided by <strong>High-Order Control Barrier Functions (HOCBF)</strong>.
</p>

<p align="center">
  <img alt="Platform" src="https://img.shields.io/badge/Simulator-CARLA-blue">
  <img alt="Task" src="https://img.shields.io/badge/Task-Unsignalized%20Intersection-success">
  <img alt="Method" src="https://img.shields.io/badge/Method-HC2RL-orange">
  <img alt="Focus" src="https://img.shields.io/badge/Focus-Safety--Aware%20Navigation-red">
</p>

</div>

---

## Overview

**HC2RL** is a safety-aware autonomous navigation policy designed for **unsignalized intersections**.  
The method integrates **HOCBF-based safety priors** into **constrained reinforcement learning**, enabling the ego vehicle to learn safe, goal-directed behaviors under interactive multi-vehicle traffic scenarios.

This repository presents:

- the **HC2RL navigation policy**
- the **randomized navigation setting** used in CARLA
- supplementary **CARLA videos** for representative maneuver cases

---

## HC2RL Navigation Policy

### Scenario 1: Random Navigation

The ego vehicle starts from a randomly selected entry lane and is assigned a dynamically sampled task:

- **Lane 1**: `{L1, L2, S1}`
- **Lane 2**: `{S2, R1, R2}`

where:

- `L` = left turn
- `S` = straight
- `R` = right turn
- `1, 2` = target lane IDs

In other words, the agent must not only maintain safety at the unsignalized intersection, but also adapt to **randomly assigned route-level maneuver commands**.

---

## Task Illustration

<div align="center">

| Entry Lane | Candidate Tasks |
|-----------|-----------------|
| Lane 1 | `L1`, `L2`, `S1` |
| Lane 2 | `S2`, `R1`, `R2` |

</div>

---

## CARLA Supplementary Videos

Each scenario below contains **2 representative cases**, arranged in a **1 × 2 layout** for easy comparison.

---

### L1

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Case 1</strong><br/>
      <a href="https://github.com/user-attachments/assets/35d1ffb8-5d6c-405a-a5e5-40e77f76159a">▶ Watch Video</a>
    </td>
    <td align="center" width="50%">
      <strong>Case 2</strong><br/>
      <a href="https://github.com/user-attachments/assets/29e2488f-03e6-467f-8e09-2aac5b00ab12">▶ Watch Video</a>
    </td>
  </tr>
</table>

---

### L2

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Case 1</strong><br/>
      <a href="https://github.com/user-attachments/assets/c13250fe-a77b-43db-a125-9afb118209f4">▶ Watch Video</a>
    </td>
    <td align="center" width="50%">
      <strong>Case 2</strong><br/>
      <a href="https://github.com/user-attachments/assets/f69b8c18-63e8-4357-952b-4a225199aa27">▶ Watch Video</a>
    </td>
  </tr>
</table>

---

### R1

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Case 1</strong><br/>
      <a href="https://github.com/user-attachments/assets/b72711e2-1a39-4cf9-a34b-8f57ce94e205">▶ Watch Video</a>
    </td>
    <td align="center" width="50%">
      <strong>Case 2</strong><br/>
      <a href="https://github.com/user-attachments/assets/8f78fb64-1881-4b70-bb9f-6ed701fc3547">▶ Watch Video</a>
    </td>
  </tr>
</table>

---

### R2

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Case 1</strong><br/>
      <a href="https://github.com/user-attachments/assets/063e9a32-7fad-4bc8-939d-be8701b9a6e3">▶ Watch Video</a>
    </td>
    <td align="center" width="50%">
      <strong>Case 2</strong><br/>
      <a href="https://github.com/user-attachments/assets/a4b3dbe6-cd4a-404e-a66b-6790a2c27c36">▶ Watch Video</a>
    </td>
  </tr>
</table>

---

### S1

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Case 1</strong><br/>
      <a href="https://github.com/user-attachments/assets/a44b787c-39d5-458b-aeef-43075ee79aca">▶ Watch Video</a>
    </td>
    <td align="center" width="50%">
      <strong>Case 2</strong><br/>
      <a href="https://github.com/user-attachments/assets/a3de60c8-c679-4b2f-96a6-b51b8e86659c">▶ Watch Video</a>
    </td>
  </tr>
</table>

---

### S2

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Case 1</strong><br/>
      <a href="https://github.com/user-attachments/assets/cc6c4513-00d3-4277-b460-d94b94571474">▶ Watch Video</a>
    </td>
    <td align="center" width="50%">
      <strong>Case 2</strong><br/>
      <a href="https://github.com/user-attachments/assets/588c40a7-8a4c-41ac-9b19-5d6f18b68779">▶ Watch Video</a>
    </td>
  </tr>
</table>

---

## Citation

If you find this work useful, please cite the corresponding paper:

```bibtex
@article{hc2rl,
  title={HC2RL: HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections},
  author={...},
  journal={...},
  year={...}
}
