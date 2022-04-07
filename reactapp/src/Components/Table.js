import './Table.css';
import React from "react";
function Tables() {
return (
	<div className="App">
	<table>
		<tr>
		<th>Booking ID</th>
		<th>Lawyer</th>
		<th>Date</th>
		</tr>
		<tr id="redc">
		<td>F34E-RST1-OPQS</td>
		<td>ABC</td>
		<td>10-02-2021</td>
		</tr>
		<tr>
		<td>ASDF-45DF-FSIL</td>
		<td>GHI</td>
		<td>18-01-2021</td>
		</tr>
		<tr>
		<td>WSIL-21R2-FVEE</td>
		<td>UVW</td>
		<td>01-01-2021</td>
		</tr>
	</table>
	</div>
);
}

export default Tables;

