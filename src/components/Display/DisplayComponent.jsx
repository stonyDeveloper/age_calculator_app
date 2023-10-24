import {useState, useEffect} from 'react'

const DisplayComponent = (props) => {
  const { number, label, bgColor } = props
  const [result, setResult] = useState()
  const [isAnimating, setIsAnimating] = useState(false);


  useEffect(() => {
    // Simulating a calculation that updates the number after 2 seconds
    const timer = setTimeout(() => {
      const result = 42; // Replace with your actual calculation
      setIsAnimating(true);
      setResult(result);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`flex gap-4 items-center ${bgColor}`}>
        <div className={`text-purple w-fit font-[Poppins-BoldItalic] font text-[55px] md:text-[60px] number-display transition-all ${isAnimating ? 'animate-number-change' : ''}`}>{number ? number : "--"}</div>
        <div className='text-off-black text-[40px] md:text-[50px] font-[Poppins-BoldItalic]'>{label}</div>
    </div>
  )
}

export default DisplayComponent




