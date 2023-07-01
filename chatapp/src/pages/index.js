import React from 'react'
import Layout from '../layout/Layout'
import MessagesDisplay from '../components/Messages/Messages.Display'
import MessagesReply from '../components/Messages/Messages.Reply'

function HomePage() {
    return (
        <Layout>
            <div className='flex'>
                <div>
                    <MessagesDisplay />
                </div>
                <div>
                    <MessagesReply />
                </div>
            </div>
        </Layout>
    )
}

export default HomePage