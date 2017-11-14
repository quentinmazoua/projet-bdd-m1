db.affairesCommune.aggregate([
	{
		$project: {
		  	commune: 1,
			count: {$size: "$affaires"}
		}
	},
	{
	  $match: {
	    count: {$gt: 0}
	  }
	}
])

