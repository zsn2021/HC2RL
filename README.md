
https://github.com/user-attachments/assets/02a8e728-0d95-411f-916c-17d387f8d982

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

These supplementary CARLA videos demonstrate the **longitudinal control behaviors** of **HC2RL (full)** and **HC2RL w/o SF** in handling complex traffic interactions across various navigation tasks, all conducted with **random seed 0**.

- **HC2RL (full)**: The complete method with the HOCBF-based safety filter.
- **HC2RL w/o SF**: The variant operating without the safety filter during execution.

---

## Navigation Tasks

The descriptions of the evaluated navigation tasks are summarized as follows:

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

### Task L1 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/ecdee224-31f1-4ea3-8241-a1a9debf8dca" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/82716765-f8d8-411f-a6c1-472c17f1a2ed" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/18887717-7ead-46cb-be94-fc7155ebdbe5" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/343f282c-2c66-4b67-86f4-261e22775778" width="100%" controls></td>
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
    <td align="center"><video src="https://github.com/user-attachments/assets/c0bd0be8-6259-4758-93a7-52a760b67aa1" width="100%" controls></td>
    <td align="center"><video src="" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/ba296a7d-f694-4df6-9fdd-f473f07d01d7" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/bd4f0cdf-6ced-4ed7-a15a-7875dac17c11" width="100%" controls></td>
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
    <td align="center"><video src="https://github.com/user-attachments/assets/fbc84e8b-08a6-4a37-9eff-283375d2cf06" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/b3fe3a3b-e0a5-4098-8ef5-90fdaae0154b" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/2716ab40-4876-4aab-934c-533b9a17154e" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/b691e032-086e-4fb2-8d5d-aeb469ff540c" width="100%" controls></td>
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
    <td align="center"><video src="https://github.com/user-attachments/assets/cb92538c-20c0-447f-9910-d056416241b3" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/ea6a0952-2b3d-4cbd-9eaf-ae0e37e5638f" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/1c3881f8-25ca-457e-aeb8-05ca2d959fc0" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/0d67ea15-146d-4cf6-8c92-7d4921c35862" width="100%" controls></td>
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
    <td align="center"><video src="https://github.com/user-attachments/assets/06965ef3-5941-4d91-9ae8-8660004c0068" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/8b171830-0a30-4851-a937-11b3d08853bc" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/57e5ce80-722d-4de9-a6bc-9adb7e82428d" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/f0116a98-cff9-4de2-804d-b65e1e2b6475" width="100%" controls></td>
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
    <td align="center"><video src="https://github.com/user-attachments/assets/b2ef9d44-acf2-48b5-8d89-2aa56ee1ea0c" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/5b2faf59-c055-4d8a-94dd-a16341cd7b14" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/0ff79d46-050d-44b7-aa1f-15dc6186401e" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/cb83fa34-4e75-4530-b3c8-4e6c1790e8ff" width="100%" controls></td>
  </tr>
</table>




  
---

## Conclusion

Compared with **HC2RL (full)**, **HC2RL w/o SF** exhibits more aggressive **longitudinal control behaviors**, which lead to collisions in certain scenarios. These results highlight the critical role of the HOCBF-based safety filter in ensuring safe and stable navigation during both training and deployment.
