const getRandom=(problems,from,to)=>
{
    if (!Array.isArray(problems) || problems.length === 0) {
        throw new Error("No problems available.");
      }
      
      const filteredProblems = problems.filter(
        (problem) => problem.rating >= from && problem.rating <= to
      );
      if (filteredProblems.length === 0) {
        throw new Error("No problems available in the specified range.");
      }
    
      const randomIndex = Math.floor(Math.random() * filteredProblems.length);
      return filteredProblems[randomIndex];
}

const handleButtonClick= async()=>
{
    try
    {
        button.style.backgroundColor = "blue";
        const api=  await  fetch("https://codeforces.com/api/problemset.problems");
        const data = await api.json();
        console.log(data);
        const problems=data.result.problems;
        const from=document.getElementById('from').value;
        const to=document.getElementById('to').value;
        console.log(from);
        console.log(to);
        const random_problem=getRandom(problems,from,to);//returns a problem object
        // const random_problem=problems[0];
        const id=random_problem.contestId;
        const index=random_problem.index;
       
       const url = `https://codeforces.com/problemset/problem/${id}/${index}`;
        window.open(url, '_blank');
        
    }
    catch(error)
    {
        console.error("Error:",error.message);
        document.body.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }

}


    const button = document.getElementById('random');
    button.addEventListener('click', handleButtonClick);
