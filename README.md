<div align="center">
HC2RL
HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections
<p>
  <img src="https://img.shields.io/badge/Task-Autonomous%20Navigation-blue" />
  <img src="https://img.shields.io/badge/Environment-CARLA-green" />
  <img src="https://img.shields.io/badge/Method-Constrained%20RL-orange" />
  <img src="https://img.shields.io/badge/Safety-HOCBF-red" />
</p>
</div>
---
Overview
HC2RL is a safety-aware autonomous navigation policy for unsignalized intersections, combining HOCBF-based safety priors with constrained reinforcement learning.  
This repository presents the project overview and supplementary CARLA video demonstrations for the paper:
> **HC2RL: HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections**
---
Method at a Glance
Algorithm: HC2RL navigation policy
Core idea: Integrate HOCBF-based safety knowledge into constrained reinforcement learning for safer and more efficient intersection navigation
Simulation platform: CARLA
Target scenario: Four-way unsignalized intersections with multi-lane route selection and dynamic surrounding traffic
---
Scenario 1: Random Navigation
In Scenario 1 (Random Navigation), the ego vehicle starts from a randomly selected entry lane and is assigned a dynamically sampled navigation task:
Lane 1: ({L1, L2, S1})
Lane 2: ({S2, R1, R2})
where L, S, and R denote left-turn, straight, and right-turn maneuvers, respectively, and 1 and 2 denote the target lane IDs.
---
CARLA Video Demonstrations
Below are supplementary CARLA videos for Scenario 1, where each maneuver contains two representative cases.
L1
<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br/>
      <a href="https://github.com/user-attachments/assets/35d1ffb8-5d6c-405a-a5e5-40e77f76159a">🎥 Watch Video</a>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br/>
      <a href="https://github.com/user-attachments/assets/29e2488f-03e6-467f-8e09-2aac5b00ab12">🎥 Watch Video</a>
    </td>
  </tr>
</table>
L2
<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br/>
      <a href="https://github.com/user-attachments/assets/c13250fe-a77b-43db-a125-9afb118209f4">🎥 Watch Video</a>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br/>
      <a href="https://github.com/user-attachments/assets/f69b8c18-63e8-4357-952b-4a225199aa27">🎥 Watch Video</a>
    </td>
  </tr>
</table>
R1
<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br/>
      <a href="https://github.com/user-attachments/assets/b72711e2-1a39-4cf9-a34b-8f57ce94e205">🎥 Watch Video</a>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br/>
      <a href="https://github.com/user-attachments/assets/8f78fb64-1881-4b70-bb9f-6ed701fc3547">🎥 Watch Video</a>
    </td>
  </tr>
</table>
R2
<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br/>
      <a href="https://github.com/user-attachments/assets/063e9a32-7fad-4bc8-939d-be8701b9a6e3">🎥 Watch Video</a>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br/>
      <a href="https://github.com/user-attachments/assets/a4b3dbe6-cd4a-404e-a66b-6790a2c27c36">🎥 Watch Video</a>
    </td>
  </tr>
</table>
S1
<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br/>
      <a href="https://github.com/user-attachments/assets/a44b787c-39d5-458b-aeef-43075ee79aca">🎥 Watch Video</a>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br/>
      <a href="https://github.com/user-attachments/assets/a3de60c8-c679-4b2f-96a6-b51b8e86659c">🎥 Watch Video</a>
    </td>
  </tr>
</table>
S2
<table>
  <tr>
    <td align="center" width="50%">
      <b>Case 1</b><br/>
      <a href="https://github.com/user-attachments/assets/cc6c4513-00d3-4277-b460-d94b94571474">🎥 Watch Video</a>
    </td>
    <td align="center" width="50%">
      <b>Case 2</b><br/>
      <a href="https://github.com/user-attachments/assets/588c40a7-8a4c-41ac-9b19-5d6f18b68779">🎥 Watch Video</a>
    </td>
  </tr>
</table>
---
Citation
If you find this project useful, please consider citing the corresponding paper.
```bibtex
@article{hc2rl,
  title={HC2RL: HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections},
  author={Author information to be added},
  journal={To be added},
  year={2026}
}
```
---
Contact
For questions, collaborations, or discussion about this work, please open an issue or contact the authors.
