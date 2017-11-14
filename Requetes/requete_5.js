db.affairesCommune.aggregate([
	{
	  $match: {
	  	population: {
	  		$gt: 0
	  	}
	  }
	},
	{
		$project: {
		  _id:"$commune",
		    population: 1,
		    nb_affaires: {$size: "$affaires"},
		    affaires_par_habitant: {$divide: [{$size: "$affaires"}, "$population"]}
		}
	},
	{
		$sort: {
			affaires_par_habitant: -1
		}
	}
])