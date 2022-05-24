import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { RoomConsumer } from '../context'
import Loading from './Loading'

const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {
                value => {
                    const { loading, sortedRooms, rooms } = value;
                    if (loading) {
                        return <Loading />
                    }
                    return <>
                        <RoomFilter rooms={rooms} />
                        <RoomList rooms={sortedRooms} />
                    </>
                }
            }

        </RoomConsumer>
    )
}

export default RoomsContainer