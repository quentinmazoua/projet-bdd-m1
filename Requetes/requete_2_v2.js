db.affairesCommune.aggregate([
	{
		$group: {
			_id: "$departement", nb_affaires: {$sum: {$size: "$affaires"}}
		}
	}
])


