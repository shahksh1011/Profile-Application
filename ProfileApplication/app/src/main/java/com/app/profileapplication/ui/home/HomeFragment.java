package com.app.profileapplication.ui.home;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.app.profileapplication.R;
import com.app.profileapplication.utilities.Parameters;

public class HomeFragment extends Fragment {
    private String token;
    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        View root = inflater.inflate(R.layout.fragment_home, container, false);
        token = getArguments().getString(Parameters.TOKEN);

        final TextView textView = root.findViewById(R.id.text_home);
        return root;
    }
}