import styles from "./components.module.css";

interface DividerProps {
    marginTop?: string;
    marginBottom?: string;
}

export default function Divider({ 
    marginTop = "-20px", 
    marginBottom = "-20px"
}: DividerProps) {
    return (
        <div 
            className={styles.divider} 
            style={{ 
                marginTop, 
                marginBottom
            }} 
        />
    );
}