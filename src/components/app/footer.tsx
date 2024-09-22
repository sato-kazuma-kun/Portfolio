export default function Footer() {
    return (
        <div className="flex w-full justify-center items-center">
            <p id="footer-text" className="text-sm sm:text-base">Copyright © {new Date().getFullYear()} Kazuma Satō. All Rights Reserved.</p>
        </div>
    );
}
