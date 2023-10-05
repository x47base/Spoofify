import './SideBarIcon.css'
export default function SideBarIcon({ icon, classes }) {
    return (
      <div className="sidebar-icon">
        <div className={classes}>{icon}</div>
      </div>
    );
};