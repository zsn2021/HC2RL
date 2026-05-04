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

| Navigation Task | Description |
|------|-------------|
| **L1** | Left turn to target lane 1 |
| **L2** | Left turn to target lane 2 |
| **S1** | Go straight to target lane 1 |
| **S2** | Go straight to target lane 2 |
| **R1** | Right turn to target lane 1 |
| **R2** | Right turn to target lane 2 |

---

## Supplementary Video Results

### Navigation Task L1 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/f9fa03dd-3f9d-4a21-b040-7d493cfbc4e8" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/078a4291-be77-4658-9396-92115f9b8bf1" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/87688dde-a90a-4d18-9594-8c3cabf63fbc" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/e1523602-771b-49ab-ab65-63b941884e18" width="100%" controls></td>
  </tr>
</table>




### Navigation Task L2 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/86765dd6-129c-4e02-a6b4-f65bb2e9c3aa" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/e970a76f-44a3-4d9b-9983-3e914ffb6362" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/1ad89cd9-1748-4ad0-a948-0996ea0e71d9" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/728a653b-5aa9-4565-9bd1-0be24d2bc0b3" width="100%" controls></td>
  </tr>
</table>





### Navigation Task S1 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/d6cd22e2-e6ab-4185-b34e-ca2f7c2b7333" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/ddeaeabd-afee-4d5b-9cdf-019744b7638c" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/03bb4cce-527a-4705-b215-428669959f7e" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/ed2c7840-77a6-4571-8a05-231cda3fa1c9" width="100%" controls></td>
  </tr>
</table>





### Navigation Task S2 

<table>
  <tr>
   <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/d723d42d-56a7-405d-8da5-3afd9a49bf43" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/4aa505d6-73a7-4e7f-a5f8-2c5490f11186" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/e30f448b-72fd-4ea3-890c-d925adf71370" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/4377950d-a6de-4e14-a0d8-b1394194d47b" width="100%" controls></td>
  </tr>
</table>











### Navigation Task R1 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/6c160ace-662a-4415-b462-f43d797fde9a" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/f62a7ae7-d5c3-4e8e-8b3c-31f62463a5ec" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/c2c063bf-b500-4e52-b5cd-02ca606deb7b" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/4ee95311-b186-400d-ab6e-c3514caa7ac4" width="100%" controls></td>
  </tr>
</table>



### Navigation Task R2 

<table>
  <tr>
    <th align="center" width="10%">Method</th>
    <th align="center" width="45%">Case 1</th>
    <th align="center" width="45%">Case 2</th>
  </tr>
  <tr>
    <td align="center">HC2RL</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/06d599bc-6eff-4b10-a6bd-6dda037a7fc4" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/92729fff-140b-4f28-8cce-b8a21cb08c2a" width="100%" controls></td>
  </tr>
  <tr>
    <td align="center">HC2RL w/o SF</td>
    <td align="center"><video src="https://github.com/user-attachments/assets/1802ee62-e2ec-402c-9088-658f53e0cbba" width="100%" controls></td>
    <td align="center"><video src="https://github.com/user-attachments/assets/c689473d-2fa3-47bf-9986-b2cd84ffcd37" width="100%" controls></td>
  </tr>
</table>

---

## Conclusion

Compared with **HC2RL (full)**, **HC2RL w/o SF** exhibits more aggressive **longitudinal control behaviors**, which lead to collisions in certain scenarios. These results highlight the critical role of the HOCBF-based safety filter in ensuring safe and stable navigation during both training and deployment.
