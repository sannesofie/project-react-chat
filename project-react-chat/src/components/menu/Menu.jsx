
//this here is me trying things out to find out how things work, this does not work... so working progress (very sloooow)

/*import './menu.css';
export const Menu = () => {
    return (
        <><div class="team-menu">Team Awesome</div><div class="channel-menu"><span class="channel-menu_name"><span class="channel-menu_prefix">#</span>
            admin</span>
        </div><div class="main">
                <div class="listings">
                    <div class="listings_channels">
                        <h2 class="listings_header">Channels</h2>
                        <ul class="channel_list">
                            <li class="channel active"><a class="channel_name"><span class="unread">0</span><span><span class="prefix">#</span>admin</span></a></li>
                            <li class="channel"><a class="channel_name"><span class="unread">10</span><span><span class="prefix">#</span>general</span></a></li>
                        </ul>
                    </div>
                    <div class="listings_direct-messages">
                        <h2 class="listings_header">Direct Messages</h2>
                        <ul class="channel_list">
                            <li class="channel"><a class="channel_name"><span class="unread">20</span><span><span class="prefix"> </span>kryton</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="message-history">
                    <div class="message"><a class="message_profile-pic" href=""></a><a class="message_username" href="">Chika</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">Slack Technologies, Inc. (originally Tiny Speck) is a computer software startup founded in 2009, with personnel located in Vancouver, San Francisco and Dublin. The core team is largely drawn from the founders of Ludicorp, the company that created Flickr. Slack is the fastest company to receive a billion dollar valuation.</span></div>
                    <div class="message"><a class="message_profile-pic" href=""></a><a class="message_username" href="">Chika</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">Rather than trying to make your own, use RocketMail instead.</span></div>
                </div>
                </div>
                </>
    )}*/
    
    import { React } from 'React'
    import './menu.css' 

    const Menu = (Menu) => {
    
    const [activeMenu, setActiveMenu] = useState()
    
    return (
        <><div class="team-menu">Team Awesome</div><div class="channel-menu"><span class="channel-menu_name"><span class="channel-menu_prefix">#</span>
        admin</span>
    </div><div class="main">
            <div class="listings">
                <div class="listings_channels">
                    <h2 class="listings_header">Channels</h2>
                    <ul class="channel_list">
                        <li class="channel active"><a class="channel_name"><span class="unread">0</span><span><span class="prefix">#</span>admin</span></a></li>
                        <li class="channel"><a class="channel_name"><span class="unread">10</span><span><span class="prefix">#</span>general</span></a></li>
                    </ul>
                </div>
                <div class="listings_direct-messages">
                    <h2 class="listings_header">Direct Messages</h2>
                    <ul class="channel_list">
                        <li class="channel"><a class="channel_name"><span class="unread">20</span><span><span class="prefix"> </span>kryton</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="message-history">
                <div class="message"><a class="message_profile-pic" href=""></a><a class="message_username" href="https://medium.com/@XirSys/simple-lobby-chat-example-with-xirsys-ba46d103e5bb">Chika</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">Slack Technologies, Inc. (originally Tiny Speck) is a computer software startup founded in 2009, with personnel located in Vancouver, San Francisco and Dublin. The core team is largely drawn from the founders of Ludicorp, the company that created Flickr. Slack is the fastest company to receive a billion dollar valuation.</span></div>
                <div class="message"><a class="message_profile-pic" href=""></a><a class="message_username" href="https://medium.com/@XirSys/simple-lobby-chat-example-with-xirsys-ba46d103e5bb">Chika</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">Rather than trying to make your own, use RocketMail instead.</span></div>
            </div>
            </div>
            </>
)}  