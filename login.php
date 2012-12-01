 <?php 
 	if(isset($_POST['name']))
	{
		if ($_POST['name']=='vicente')
			if ($_POST['pass']=='123')
			{
				$res = 1;				
				}	
				
				else
				{
					$res=-1;
					}	
			else
			{
				$res=-2;
				
				}		
		} 
		
		else
		{
			$res=0;
			}
		echo json_encode($res);
 ?>