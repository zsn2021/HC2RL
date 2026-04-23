
<div align="center">

# HC2RL: HOCBF-Informed Constrained Reinforcement Learning for Safety-Aware Autonomous Navigation at Unsignalized Intersections

<br>

<span style="background:#e6f7ff;color:#1890ff;padding:4px 10px;border-radius:6px;margin:0 5px;">🔀 Unsignalized Intersection</span>
<span style="background:#f6ffed;color:#389e05;padding:4px 10px;border-radius:6px;margin:0 5px;">🚗Autonomous Navigation</span>
<span style="background:#f0f2f5;color:#0050b3;padding:4px 10px;border-radius:6px;margin:0 5px;">🤖 Constrained RL</span>
<span style="background:#fffbe6;color:#ad8b00;padding:4px 10px;border-radius:6px;margin:0 5px;">🛡️ HOCBF Safety Guarantee</span>

</div>

---

## Overview

This repository page provides supplementary CARLA video demonstrations of **HC2RL (full)** and **HC2RL w/o SF** in unsignalized-intersection navigation tasks. The videos present representative executions under different navigation commands and traffic interactions.

The purpose of this comparison is to illustrate the role of the HOCBF-based safety filter in shaping the final navigation behavior. This page presents only the evaluation videos of the HC2RL navigation policy trained with **random seed 0**, while the comprehensive evaluation results aggregated over **five random seeds [0, 1, 2, 3, 4]** are reported in **Table II** and **Fig. 7** of the paper.

- **HC2RL (full)**: the complete HC2RL method with the HOCBF-based safety filter during execution.
- **HC2RL w/o SF**: the corresponding variant without the HOCBF-based safety filter during execution.

---

## Navigation Tasks

To facilitate video browsing, the evaluated navigation tasks are summarized as follows:

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

The following videos provide representative CARLA demonstrations of **HC2RL (full)** and **HC2RL w/o SF** across different navigation tasks, with the aim of qualitatively comparing their navigation behaviors under the same task settings.

### Task L1 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="40%">Case 1</th>
    <th align="center" width="40%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/1c41bbcd-3c3e-406b-a994-bb5d5c284b61" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/69e0ea0e-5f25-4372-8fa5-1a0dedbabaca" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/0ab497b3-21a9-4f5f-9ce2-d1947bc97484" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/4fb5a173-f0ec-4a98-a72a-54818ff30553" width="100%" controls></td>
  </tr>
</table>






### Task L2 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/3586d7ce-151d-43ae-9658-dc8d5edc57ea" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/ce62480d-a2a1-4baf-a082-d754604a7e07" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/80e9d93a-4d32-48f7-9364-1cecaf0528de" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/6a654c79-1bd8-4acd-89a1-d84994b8757e" width="100%" controls></td>
  </tr>
</table>





### Task R1 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/cbe8f6e3-e3a9-4a5d-82d0-56aa02263e6e" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/9290061e-f6d4-463e-bac9-20fd8c96ef9e" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/91b03aeb-86f0-45d5-9686-3f01a5490fa3" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/642bf19d-88f9-4112-b41a-1f62456d3421" width="100%" controls></td>
  </tr>
</table>














### Task R2 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/8c11c429-6f9e-40c8-b17a-641821a798ec" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/4fc1dc51-1d9f-4014-9ab6-c3d07993b1eb" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/242673aa-9133-4d96-90fa-3ea1b3379dae" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/b415a51c-a86c-4b82-ab95-2ec39a1680df" width="100%" controls></td>
  </tr>
</table>






























### Task S1 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/e588d805-350d-42b2-9976-7d21abf61df0" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/b18478af-c1a7-4a28-91b4-2093f03eb4af" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/efec26f0-53ab-49e4-843b-3ddd8e85ede4" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/1ba24bc4-7478-4b9c-afcd-c1fb79c373c1" width="100%" controls></td>
  </tr>
</table>





















### Task S2 

<table>
  <tr>
   <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/44584bf3-4cd6-463d-bbda-31e22df6b9b1" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/6737d752-f816-4ad3-9eee-5459103fecb8" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/b7840303-1567-424e-b5f9-87620d212d14" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/4cd8a666-b09b-4d17-9407-2db4b719664a" width="100%" controls></td>
  </tr>
</table>

  
---

## Conclusion

Compared with **HC2RL (full)**, **HC2RL w/o SF** shows more aggressive longitudinal behaviors and leads to collisions in some cases. These results demonstrate that the HOCBF-based safety filter plays an important role in maintaining safe and stable navigation behavior during both training and deployment.
