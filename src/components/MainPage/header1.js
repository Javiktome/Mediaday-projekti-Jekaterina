<div>
    <div className="top-headerbar">
        <Link to="/home" className="bar-para hover:text-primary">MEDIADAY 2022</Link>

        <Nav.Item className="bar-para">
            <NavLink className="bar-para" to="/event/mediaday-123" activeClassName="selected" activeStyle={{
                fontWeight: "bold",
                color: "green"
            }}>
                Mediaday event linkki
            </NavLink>
        </Nav.Item>
        <input type="text" placeholder="Search here" className="search" />
        <Button style={{ height: '40px', marginTop: '5px' }} variant="primary">Search</Button>

    </div><br /><br />

</div>