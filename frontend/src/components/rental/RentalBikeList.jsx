import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showMarkerAPI } from '../../feature/rental/rentalMarkerAPI.js';
import { addData } from '../../feature/rental/rentalMarkerSlice.js'


const RentalBikeList = ({className}) => { //onStationSelect

	const [ bikeList, setBikeList ] = useState([{}]);

	const dispatch = useDispatch();

	useEffect(() => {
			const bikeListData = async () => {
			const bikeData = await showMarkerAPI();
			dispatch(addData(bikeData));

			setBikeList(bikeData)
			
		}
		bikeListData();
	}, []);

	return (
		<div>
			<div className={className}>
				<ul>
					{
						bikeList && bikeList.map((bikeList, index)=>{
							return (
								<li 
									key={index}
									onClick={()=>{}} //onStationSelect
								>{bikeList.name}</li>
							)
						})

					}
				</ul>
			</div>
		</div>
	)
}

export default RentalBikeList;